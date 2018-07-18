### Unix

    docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=xehVg1IpVhEmlwRMG -v $CWD:/var/lib/mysql mysql:5.7

### Windows
   
Observe que o diretorio `D:` deve estar compartilhado.

    docker run --name servidor-mysql -d -p 3306:3306 -v D:/HYPER-V/Docker/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=coreapp-pass mysql:5.7