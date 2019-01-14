# 58tu常用查询

### 商品

##### 日销

```json
{
  "query": {
    "bool": {
      "filter": [
        {
          "term": {
            "date": "2018-12-28"
          }
        },
        {
          "term": {
            "shopcode": 113462750
          }

        },
        {
          "term": {
            "soldnum_d": 0
          }
        },
        {
          "range": {
            "soldnum_d": {
              "gte": 0
            }
          }
        }
      ]
    }
  }
}
```

### 日志(monolog index)

```json
{
  "sort": [
    {
      "datetime": {
        "order": "desc"
      }
    }
  ],
  "query": {
    "bool": {
      "filter": [
        {
          "range": {
            "datetime": {
              "gte": "2019-01-12T16:00:00Z",
              "lt": "2019-01-13T16:00:00Z",
              "time_zone": "+08:00"
            }
          }
        }
      ]
    }
  }
}
```