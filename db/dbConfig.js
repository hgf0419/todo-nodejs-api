/**
 * 描述: 数据库基础配置
 * 日期: 2021-06-28
*/

const mysql = {
    host: 'localhost', // 主机名称，一般是本机
	port: '3306', // 数据库的端口号，如果不设置，默认是3306
	user: 'root', // 创建数据库时设置用户名
	password: '123678', // 创建数据库时设置的密码
	database: 'golf_test_todo',  // 创建的数据库
	connectTimeout: 5000 // 连接超时
}

module.exports = mysql;