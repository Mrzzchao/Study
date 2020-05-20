FROM csighub.tencentyun.com/tsw/tsw:latest

# 定义环境变量，后续指令使用
ENV PROJECT_NAME=docker-demo

# 新建工程目录
RUN mkdir -p /usr/local/services/$PROJECT_NAME && \
mkdir -p /data/sites/$PROJECT_NAME/log/

# 从系统复制到容器里面，如果是压缩文件，会解压
ADD ./src /usr/local/services/$PROJECT_NAME/src/


# 定义工作目录（run cmd基于指定目录运行）
WORKDIR /usr/local/services/$PROJECT_NAME/

# 指定docker转发端口
EXPOSE 8000

CMD ["bash", "/usr/local/services/TSW-1.0/bin/proxy/startup.sh"]