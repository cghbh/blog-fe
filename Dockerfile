
# 指定镜像
FROM nginx
# 创建一个目录 
# RUN mkdir -p /home/blog
# 把新建的目录指定为工作目录
# WORKDIR /home/blog
# 复制当前目录下的所有文件内容到容器内部的工作目中 , " . " 是指 dockerfile 文件 相对的当前目录下的所有文件 , 当然你也可以 指定目录
# COPY . /home/blog
# 指定下载依赖淘宝镜像 , 学过前端都懂吧~
# RUN npm config set registry https://registry.npm.taobao.org
# 到app目录下
# COPY . ./
# 执行npm run build命令
# RUN npm run build
# 声明端口80。仅声明作用，如果docker run -P 就会指定该端口
EXPOSE 80
# 从名为builder的阶段，复制打包好的文件到/usr/share/nginx/html/
COPY dist/ /usr/share/nginx/html/
