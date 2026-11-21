---
title: Distributed Job Scheduler
description: A fault-tolerant scheduler that dispatches background jobs across a cluster of workers, with retries, priorities and cron-style triggers.
role: Lead Engineer
year: 2025
order: 1
featured: true
stack: [Go, gRPC, etcd, Kubernetes, Prometheus]
tags: [Go, gRPC, Kubernetes]
highlights:
  - Schedules 2M+ jobs per day across 40 worker nodes
  - Leader election on etcd with zero-downtime failover
  - p99 dispatch latency kept under 50 ms
cover: ../../assets/projects/job-scheduler.jpg
thumbnail: ../../assets/projects/job-scheduler-thumb.jpg
---
