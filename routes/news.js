/**
 * 描述: 新闻路由模块
 * 日期: 2021-06-28
*/

const express = require('express');
const router = express.Router();
const service = require('../services/taskService');


const base='/news';

// 列表接口
router.get(base+'/list', service.list);

// 添加接口
router.post(base+'/add', service.add);

// 编辑接口
router.put(base+'/edit', service.edit);

// 操作状态接口
router.put(base+'/statu', service.statu);

// 删除接口
router.delete(base+'/delete', service.delete);


module.exports = router;

