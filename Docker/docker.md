## Docker 学习

![image-20190820142026298](/Users/zhichazhang/Library/Application Support/typora-user-images/image-20190820142026298.png)

### 概念

- 镜像（Image）：镜像是一个特殊的文件系统，它提供容器运行时所需的程序、库、资源、配置、以及运行需要的参数（如匿名卷、环境变量等）。它是一个静态的、只读的、Docker 容器模板，通过镜像启动 Docker 容器

- 容器（Container）：容器本质上是进程，它是 Docker 镜像的运行实例。容器和普通进程的区别在于，容器拥有自己的命名空间，每个容器只能访问自己命名空间下的资源（这是 Docker 环境隔离的基础）

- 仓库（Registry）：Docker 的镜像仓库

- 宿主机（Host）：运行 Docker 引擎和容器的环境。一个宿主机上可运行多个 Docker 容器，每个容器和宿主机之间环境隔离




### 优势

| 特性       | 容器               | 虚拟机      |
| :--------- | :----------------- | :---------- |
| 启动       | 秒级               | 分钟级      |
| 硬盘使用   | 一般为 `MB`        | 一般为 `GB` |
| 性能       | 接近原生           | 弱于        |
| 系统支持量 | 单机支持上千个容器 | 一般几十个  |



### 命令

```
// 安装查询
docker version

// 获取所有虚拟机ip
docker-machine ip

// 列出本机所有image文件
docker image ls

// 列出本机正在运行的容器
docker container ls

// 列出本机所有容器，包括终止运行的容器
docker container ls --all

// 拉取image文件
docker image pull

// 删除 image 文件
docker image rm [imageName]

// 生成一个正在运行的容器
docker container run hello-world

// 终止容器
docker container kill [containID]

// 运行服务
docker run -d -p 80:80 --name webserver nginx

// 停止服务
docker stop webserve
```





### 公司安装

由于网络隔离，一定要走12639的IOA代理

![image-20190820153803656](/Users/zhichazhang/Library/Application Support/typora-user-images/image-20190820153803656.png)

