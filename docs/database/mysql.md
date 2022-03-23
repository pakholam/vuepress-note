# Database
## MySQL 8.0 安装 

### (1) 下载Mysql安装包

Mysql下载安装包 https://dev.mysql.com/downloads/mysql/

<img src="/install/mysql01.png">

<img src="/install/mysql02.png">

### (2) Mysql配置

解压zip包到安装目录（我的解压在了 ）<D:\mysql\mysql-8.0.26-winx64>

<img src="/install/mysql03.png">

打开 my.ini,写入如下配置

```ini
[mysqld]
# 设置3306端口
port=3306
# 设置mysql的安装目录
basedir=D:\\view\\mysql   # 切记此处一定要用双斜杠
# 设置mysql数据库的数据的存放目录
datadir=D:\\view\\mysql\\data   # 此处同上
# 允许最大连接数
max_connections=200
# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统
max_connect_errors=10
# 服务端使用的字符集默认为UTF8
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 默认使用“mysql_native_password”插件认证
default_authentication_plugin=mysql_native_password
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
[client]
# 设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8
```

配置环境变量，PATH新增 <D:\mysql\mysql-8.0.26-winx64\bin>

### (3) Mysql安装

管理员身份运行cmd，

`cd D:\mysql\mysql-8.0.26-winx64\bin // 跳转到Mysql的bin目录下`

`mysqld --initialize --console // 打印root用户初始默认密码123456`

安装服务

`mysqld --install`

`net start mysql` 启动Mysql服务

`net stop mysql`  停止Mysql服务

`sc delete MYSQL/mysqld -remove` 卸载Mysql服务

`mysql -u root -p` 登录root用户

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'new_password;'`

`show databases;` 查看数据库

`use database_name;` 进入数据库

`show tables;` 显示表格内容