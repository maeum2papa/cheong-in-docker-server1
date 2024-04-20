import { json } from "@sveltejs/kit";
import mysql from "mysql2/promise.js";
import { dbconf } from "../../../services/mysql";
import { decrypt } from "../../../services/encrypt";

export async function POST({request,cookies}){
    
    let result  = {msg:'no'};
    let status  = 400;
    const db = await mysql.createConnection(dbconf);
    let where = [];
    let joinWhere = '1';

    try {
        let params = await request.json();
        params = JSON.parse(decrypt(params.body));

        if(params.sort != undefined && params.sort != 0){
            where.push("sort='"+params.sort+"'");
        }
        if (where.length > 0) {
            joinWhere = where.join(' and ');
        }
        if (params.id) {
            joinWhere = `idx=${params.id}`
        }

        const [rows, fields] = await db.execute("select * from w_faq where "+joinWhere+" order by idx desc limit "+(params.limit * (params.page - 1))+","+params.limit+"");
       
        //데이터 총 개수
        const [rows2, fields2] = await db.execute("SELECT COUNT(*) AS cnt FROM w_faq where "+joinWhere)
        
        result = {msg:'ok',data:rows, totalDocs: rows2[0].cnt};
        status = 200;
    } catch(error) {

    }

    db.end();
    return json(result,{status:status})
}