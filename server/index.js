const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

function readJSON(fileName, req, res) {
  const jsonFilePath = path.join(__dirname + '\\json', fileName);
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: '读取数据文件失败'
      });
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      console.error(parseErr);
      res.status(500).json({
        error: '解析JSON数据失败'
      });
    }
  });
}

// 获取底部导航栏数据
app.get('/api/getNavData', (req, res) =>   readJSON('nav.json', req, res));

app.listen(PORT, () => {
  console.log(`服务器已启动，正在监听端口 ${PORT}`);
});