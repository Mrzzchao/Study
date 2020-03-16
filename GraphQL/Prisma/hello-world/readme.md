### 数据库连接
```
docker exec -it hello-world_mysql_1 bash
mysql -hmysql -P3306 -uroot -p'prisma' prisma --default-character-set=utf8 -A


```