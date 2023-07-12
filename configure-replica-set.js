config = {
    "_id" : "rs0",
    "members" : [
        {
            "_id" : 0,
            "host" : "mongo-node-1:27017",
            "storage" : { "dbPath" : "/path/to/data/storage", "journal" : { "enabled" : true }, "directoryPerDB": true }
        },
        { 
            "_id" : 1,
            "host" : "mongo-node-2:27018",
            "storage" : { "dbPath" : "/path/to/data/storage", "journal" : { "enabled" : true }, "directoryPerDB": true }
        },
        { 
            "_id" : 2,
            "host" : "mongo-node-3:27019",
            "storage" : { "dbPath" : "/path/to/data/storage", "journal" : { "enabled" : true }, "directoryPerDB": true }
        },
        { 
            "_id" : 3,
            "host" : "mongo-node-4:27020",
            "storage" : { "dbPath" : "/path/to/data/storage", "journal" : { "enabled" : true }, "directoryPerDB": true }
        },
        { 
            "_id" : 4,
            "host" : "mongo-node-5:27021",
            "storage" : { "dbPath" : "/path/to/data/storage", "journal" : { "enabled" : true }, "directoryPerDB": true }
        }
    ]
};
rs.initiate(config);
