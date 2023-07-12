# MongoDB_cluster_Dockerised

A Dockerized MongoDB cluster refers to a deployment of MongoDB, a popular open-source NoSQL database, using Docker containers. In this setup, the different components of the MongoDB cluster, such as primary nodes, secondary nodes, and configuration servers, are each encapsulated within separate Docker containers.

Docker allows for easy packaging, distribution, and deployment of applications and services in isolated containers. By containerizing each component of the MongoDB cluster, you can achieve a more flexible and scalable infrastructure.

Typically, a MongoDB cluster consists of multiple replica sets, where each replica set contains multiple nodes. The replica sets ensure high availability and data redundancy by maintaining synchronized copies of the data across the nodes. In a Dockerized MongoDB cluster, each replica set node, including primary and secondary nodes, can be deployed as a separate container.

By leveraging Docker's features like container orchestration tools (e.g., Docker Compose or Kubernetes), you can manage and scale your MongoDB cluster more efficiently. You can easily spin up new instances of replica set nodes, scale the cluster horizontally by adding more nodes, and distribute the workload across multiple containers.

Overall, a Dockerized MongoDB cluster simplifies the management, deployment, and scalability of MongoDB infrastructure by leveraging the containerization capabilities of Docker. It provides a more portable, reproducible, and modular approach to running MongoDB in various environments, whether it's on local development machines, production servers, or cloud platforms.


Here is a fully described version of your `README.md` file:

```markdown
# Dockerised MongoDB cluster - DO NOT USE FOR PRODUCTION

This repository provides a Dockerized MongoDB cluster setup. It is important to note that this setup is not intended for production use and should only be used for testing or development purposes.

## Requirements

To use this Dockerized MongoDB cluster, you will need the following:

* Docker: Make sure you have Docker installed on your system.
* Docker Compose: Install Docker Compose as it is used to manage the container orchestration.

## Setup

Follow these steps to set up and run the MongoDB cluster:

1. Update your device's hosts file: Open your device's hosts file (e.g., `/etc/hosts`) and add the following entries pointing to `127.0.0.1`:
    ```
    127.0.0.1 mongo-node-1
    127.0.0.1 mongo-node-2
    127.0.0.1 mongo-node-3
    127.0.0.1 mongo-node-4
    127.0.0.1 mongo-node-5
    ```

2. Run the start script: Open a terminal and navigate to the project directory. Run the command `./start.sh`. This script will spin up six Docker containers: five MongoDB nodes and one instance of Mongo Express.

3. Connect to the cluster: Once the containers are up and running, you should be able to connect to the MongoDB cluster using the connection string: `mongodb://mongo-node-1:27017,mongo-node-2:27018,mongo-node-3:27019,mongo-node-4:27020,mongo-node-5:27021/?replicaSet=rs0`

    As an example, you can use the following command to connect using the MongoDB shell:
    ```
    $ mongo mongodb://mongo-node-1:27017,mongo-node-2:27018,mongo-node-3:27019,mongo-node-4:27020,mongo-node-5:27021/?replicaSet=rs0
    ```

Please note that this setup is not suitable for production environments. It is designed for local development, testing, or learning purposes only.
```

This revised `README.md` file provides a more detailed explanation of the repository, requirements, setup instructions, and usage information. It also includes a warning stating that this Dockerized MongoDB cluster should not be used for production purposes but rather for testing, development, or learning purposes only.

To add **storage per nodes** for file and data storage in the `configure-replica-set.js` configuration file, you can modify the code as follows:

```javascript
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
```

In this modified code, each member of the replica set has a `"storage"` field that specifies the data storage configuration. The `"dbPath"` parameter should be replaced with the actual path to the desired storage location for each node. Additionally, the `"journal"` option is enabled to provide durability and crash recovery, and the `"directoryPerDB"` option is set to `true` to create separate directories for each database within the storage path.

Make sure to replace `/path/to/data/storage` with the appropriate directory path on each node where you want to store the data files.
