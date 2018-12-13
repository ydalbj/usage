### Monolog日志常用查询

* Elasticsearch异常查询
    ```json
    GET monolog/_search
    {
        "query" : {
            "term" : {
                "message" : "Couldn't connect to host, Elasticsearch down?"
            }
        }
    }
    ```

    ```json
    GET monolog/_search
    {
        "query" : {
            "term" : {
                "message" : "No enabled connection"
            }
        }
    }
    ```