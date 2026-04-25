<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/NotHarshhaa/Certified_Kubernetes_Administrator/tree/master/EKS">
    <img src="images/aws-eks.svg" alt="Logo" width="150" height="150">
  </a>

<h3 align="center">AWS EKS</h3>

  <p align="center">
    Amazon Elastic Kubernetes Service - Managed Kubernetes on AWS
  </p>
</div>
<br>
<div id="top">
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
  <li>
     Introduction to AWS EKS
    <ul>
        <li><a href="#Introduction-to-AWS-EKS-What-is-AWS-EKS">What is AWS EKS?</a></li>
        <li><a href="#Introduction-to-AWS-EKS-Why-use-AWS-EKS">Why use AWS EKS?</a></li>
        <li><a href="#Introduction-to-AWS-EKS-EKS-Architecture">EKS Architecture</a></li>
        <li><a href="#Introduction-to-AWS-EKS-EKS-Components">EKS Components</a></li>
        <li><a href="#Introduction-to-AWS-EKS-EKS-vs-Self-Managed-Kubernetes">EKS vs Self-Managed Kubernetes</a></li>
        <li><a href="#Introduction-to-AWS-EKS-Pricing">Pricing</a></li>
    </ul>
  </li>
  <li>
     Prerequisites for EKS
    <ul>
        <li><a href="#Prerequisites-for-EKS-AWS-Account-Setup">AWS Account Setup</a></li>
        <li><a href="#Prerequisites-for-EKS-Install-AWS-CLI">Install AWS CLI</a></li>
        <li><a href="#Prerequisites-for-EKS-Configure-AWS-Credentials">Configure AWS Credentials</a></li>
        <li><a href="#Prerequisites-for-EKS-Install-kubectl">Install kubectl</a></li>
        <li><a href="#Prerequisites-for-EKS-Install-eksctl">Install eksctl</a></li>
        <li><a href="#Prerequisites-for-EKS-Install-Helm">Install Helm</a></li>
    </ul>
  </li>
  <li>
     Create EKS Cluster using eksctl
    <ul>
        <li><a href="#Create-EKS-Cluster-using-eksctl-What-is-eksctl">What is eksctl?</a></li>
        <li><a href="#Create-EKS-Cluster-using-eksctl-Create-Cluster-Config">Create Cluster Config</a></li>
        <li><a href="#Create-EKS-Cluster-using-eksctl-Create-Cluster">Create Cluster</a></li>
        <li><a href="#Create-EKS-Cluster-using-eksctl-Verify-Cluster">Verify Cluster</a></li>
        <li><a href="#Create-EKS-Cluster-using-eksctl-Delete-Cluster">Delete Cluster</a></li>
    </ul>
  </li>
  <li>
     EKS Cluster Management
    <ul>
        <li><a href="#EKS-Cluster-Management-Scaling-Node-Groups">Scaling Node Groups</a></li>
        <li><a href="#EKS-Cluster-Management-Update-Kubernetes-Version">Update Kubernetes Version</a></li>
        <li><a href="#EKS-Cluster-Management-Cluster-Autoscaling">Cluster Autoscaling</a></li>
        <li><a href="#EKS-Cluster-Management-Managing-Add-ons">Managing Add-ons</a></li>
    </ul>
  </li>
  <li>
     Deploy Applications on EKS
    <ul>
        <li><a href="#Deploy-Applications-on-EKS-Deploy-Nginx-Deployment">Deploy Nginx Deployment</a></li>
        <li><a href="#Deploy-Applications-on-EKS-Expose-as-LoadBalancer">Expose as LoadBalancer</a></li>
        <li><a href="#Deploy-Applications-on-EKS-Access-Application">Access Application</a></li>
        <li><a href="#Deploy-Applications-on-EKS-Clean-up">Clean up</a></li>
    </ul>
  </li>
  <li>
     EKS Storage Classes
    <ul>
        <li><a href="#EKS-Storage-Classes-Default-Storage-Classes">Default Storage Classes</a></li>
        <li><a href="#EKS-Storage-Classes-Create-Persistent-Volume-Claim">Create Persistent Volume Claim</a></li>
        <li><a href="#EKS-Storage-Classes-Deploy-Application-with-PVC">Deploy Application with PVC</a></li>
    </ul>
  </li>
  <li>
     EKS Ingress with AWS Load Balancer Controller
    <ul>
        <li><a href="#EKS-Ingress-with-AWS-Load-Balancer-Controller-What-is-AWS-Load-Balancer-Controller">What is AWS Load Balancer Controller?</a></li>
        <li><a href="#EKS-Ingress-with-AWS-Load-Balancer-Controller-Install-IAM-Policies">Install IAM Policies</a></li>
        <li><a href="#EKS-Ingress-with-AWS-Load-Balancer-Controller-Install-Controller">Install Controller</a></li>
        <li><a href="#EKS-Ingress-with-AWS-Load-Balancer-Controller-Create-Ingress">Create Ingress</a></li>
    </ul>
  </li>
  <li>
     EKS Security Best Practices
    <ul>
        <li><a href="#EKS-Security-Best-Practices-IAM-Roles-for-Service-Accounts">IAM Roles for Service Accounts (IRSA)</a></li>
        <li><a href="#EKS-Security-Best-Practices-Pod-Security-Standards">Pod Security Standards</a></li>
        <li><a href="#EKS-Security-Best-Practices-Network-Policies">Network Policies</a></li>
        <li><a href="#EKS-Security-Best-Practices-Secrets-Management">Secrets Management</a></li>
    </ul>
  </li>
  <li>
     EKS Monitoring and Logging
    <ul>
        <li><a href="#EKS-Monitoring-and-Logging-CloudWatch-Container-Insights">CloudWatch Container Insights</a></li>
        <li><a href="#EKS-Monitoring-and-Logging-Prometheus-and-Grafana">Prometheus and Grafana</a></li>
        <li><a href="#EKS-Monitoring-and-Logging-EKS-Control-Plane-Logging">EKS Control Plane Logging</a></li>
    </ul>
  </li>
  <li>
     EKS Cost Optimization
    <ul>
        <li><a href="#EKS-Cost-Optimization-Right-Sizing-Node-Groups">Right-Sizing Node Groups</a></li>
        <li><a href="#EKS-Cost-Optimization-Spot-Instances">Spot Instances</a></li>
        <li><a href="#EKS-Cost-Optimization-Autoscaling">Autoscaling</a></li>
        <li><a href="#EKS-Cost-Optimization-Cleanup-Resources">Cleanup Resources</a></li>
    </ul>
  </li>
</ol>
</details>
</div>

---

# AWS EKS

## Introduction to AWS EKS

<div id="Introduction-to-AWS-EKS-What-is-AWS-EKS">

### What is AWS EKS?

**Amazon Elastic Kubernetes Service (EKS)** is a managed Kubernetes service that makes it easy to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane. 

According to the [official AWS documentation](https://aws.amazon.com/eks/), EKS provides:

- **Managed Control Plane**: AWS manages the Kubernetes control plane across multiple AWS Availability Zones
- **Automatic Scaling**: Automatically scales the control plane based on workload
- **High Availability**: Runs across multiple AZs for fault tolerance
- **Security**: Integrates with AWS IAM for authentication and VPC for networking
- **Compatibility**: Runs the latest Kubernetes versions and is certified Kubernetes-conformant

</div>

<div id="Introduction-to-AWS-EKS-Why-use-AWS-EKS">

### Why use AWS EKS?

✅ **Reduced Operational Overhead**: No need to manage the Kubernetes control plane  
✅ **High Availability**: Control plane runs across multiple AZs automatically  
✅ **Security**: Integration with AWS IAM and VPC for secure networking  
✅ **Serverless Option**: Use AWS Fargate for serverless compute  
✅ **Integrated Services**: Works seamlessly with other AWS services (ELB, IAM, CloudWatch, etc.)  
✅ **Latest Kubernetes**: Always supports the latest Kubernetes versions  
✅ **Community Support**: Large community and extensive documentation  

</div>

<div id="Introduction-to-AWS-EKS-EKS-Architecture">

### EKS Architecture

The EKS architecture consists of:

1. **EKS Control Plane**: Managed by AWS, runs the Kubernetes API server, etcd, scheduler, and controller manager
2. **Worker Nodes**: EC2 instances that run your container workloads
3. **EKS Cluster**: The logical Kubernetes cluster that combines control plane and worker nodes
4. **VPC**: Network isolation for your cluster
5. **IAM**: Authentication and authorization for cluster access

```
┌────────────────────────────────────────────────────────┐
│                    AWS Cloud                           │
│                                                        │
│  ┌─────────────────────────────────────────────────┐   │
│  │           EKS Control Plane (Managed)           │   │
│  │  - API Server                                   │   │
│  │  - etcd                                         │   │
│  │  - Scheduler                                    │   │
│  │  - Controller Manager                           │   │
│  └─────────────────────────────────────────────────┘   │
│                          ↕                             │
│  ┌─────────────────────────────────────────────────┐   │
│  │              Worker Nodes (EC2)                 │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐       │   │
│  │  │ Node 1   │  │ Node 2   │  │ Node 3   │       │   │
│  │  │ Kubelet  │  │ Kubelet  │  │ Kubelet  │       │   │
│  │  └──────────┘  └──────────┘  └──────────┘       │   │
│  └─────────────────────────────────────────────────┘   │
│                          ↕                             │
│  ┌─────────────────────────────────────────────────┐   │
│  │                   VPC Network                   │   │
│  └─────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────┘
```

</div>

<div id="Introduction-to-AWS-EKS-EKS-Components">

### EKS Components

- **Control Plane**: Managed Kubernetes master components (API server, etcd, scheduler, controller manager)
- **Worker Nodes**: EC2 instances that register with the control plane and run pods
- **Node Groups**: Logical grouping of worker nodes with the same configuration
- **Fargate Profiles**: Define which pods run on AWS Fargate (serverless)
- **Add-ons**: Software that provides operational capabilities (VPC CNI, CoreDNS, kube-proxy)
- **IAM Roles**: Provide permissions for EKS to interact with other AWS services

</div>

<div id="Introduction-to-AWS-EKS-EKS-vs-Self-Managed-Kubernetes">

### EKS vs Self-Managed Kubernetes

| Feature | EKS (Managed) | Self-Managed |
|---------|---------------|--------------|
| **Control Plane Management** | AWS manages | You manage |
| **Setup Time** | Minutes | Hours/Days |
| **High Availability** | Built-in (multi-AZ) | Manual configuration |
| **Updates** | Automatic/One-click | Manual |
| **Pricing** | $0.10/hour per cluster | No control plane cost |
| **Maintenance** | AWS handles | You handle |
| **Flexibility** | Standard configuration | Full customization |

</div>

<div id="Introduction-to-AWS-EKS-Pricing">

### Pricing

- **EKS Control Plane**: $0.10 per hour per cluster (~$73/month)
- **Worker Nodes**: Standard EC2 instance pricing
- **AWS Fargate**: $0.04016 per vCPU-hour and $0.00444 per GB-hour
- **Load Balancers**: Standard ELB/ALB pricing
- **EBS Volumes**: Standard EBS pricing
- **Data Transfer**: Standard AWS data transfer rates

> [!TIP]
> Use the [AWS Pricing Calculator](https://calculator.aws/) to estimate your EKS costs.

</div>

---

## Prerequisites for EKS

<div id="Prerequisites-for-EKS-AWS-Account-Setup">

### AWS Account Setup

Before creating an EKS cluster, you need:

1. **AWS Account**: Create an account at [aws.amazon.com](https://aws.amazon.com)
2. **IAM User**: Create an IAM user with appropriate permissions
3. **Access Keys**: Generate AWS Access Key ID and Secret Access Key
4. **AWS CLI**: Install and configure AWS CLI

Required IAM permissions:
- `eks:CreateCluster`
- `eks:DescribeCluster`
- `ec2:CreateVpc`, `ec2:CreateSubnet`
- `iam:PassRole`
- And many more (use `AdministratorAccess` for learning)

</div>

<div id="Prerequisites-for-EKS-Install-AWS-CLI">

### Install AWS CLI

#### 📌 **Install AWS CLI (Linux/macOS)**

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
aws --version
```

#### 📌 **Install AWS CLI (Windows)**

```powershell
# Download and run the MSI installer from:
# https://aws.amazon.com/cli/
aws --version
```

</div>

<div id="Prerequisites-for-EKS-Configure-AWS-Credentials">

### Configure AWS Credentials

```bash
aws configure
```

You'll be prompted to enter:
- AWS Access Key ID
- AWS Secret Access Key
- Default region name (e.g., `us-east-1`, `us-west-2`)
- Default output format (e.g., `json`)

Verify configuration:

```bash
aws sts get-caller-identity
```

</div>

<div id="Prerequisites-for-EKS-Install-kubectl">

### Install kubectl

#### 📌 **Install kubectl (Linux)**

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/
kubectl version --client
```

#### 📌 **Install kubectl (macOS)**

```bash
brew install kubectl
kubectl version --client
```

#### 📌 **Install kubectl (Windows)**

```powershell
# Using Chocolatey
choco install kubernetes-cli

# Or download from:
# https://kubernetes.io/docs/tasks/tools/
kubectl version --client
```

</div>

<div id="Prerequisites-for-EKS-Install-eksctl">

### Install eksctl

`eksctl` is a simple CLI tool for creating and managing clusters on EKS.

#### 📌 **Install eksctl (Linux/macOS)**

```bash
# For Linux
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
sudo mv /tmp/eksctl /usr/local/bin
eksctl version
```

```bash
# For macOS
brew tap weaveworks/tap
brew install weaveworks/tap/eksctl
eksctl version
```

#### 📌 **Install eksctl (Windows)**

```powershell
# Using Chocolatey
choco install eksctl

# Or download from:
# https://github.com/weaveworks/eksctl/releases/
eksctl version
```

</div>

<div id="Prerequisites-for-EKS-Install-Helm">

### Install Helm

#### 📌 **Install Helm (Linux/macOS)**

```bash
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
helm version
```

#### 📌 **Install Helm (Windows)**

```powershell
# Using Chocolatey
choco install kubernetes-helm

# Or download from:
# https://github.com/helm/helm/releases
helm version
```

</div>

---

## Create EKS Cluster using eksctl

<div id="Create-EKS-Cluster-using-eksctl-What-is-eksctl">

### What is eksctl?

**eksctl** is a CLI tool for creating and managing Kubernetes clusters on Amazon EKS. It's written in Go and uses CloudFormation under the hood.

Features:
- Simple cluster creation with a single command
- Automatic VPC and subnet creation
- Node group management
- Easy cluster upgrades
- Integration with AWS IAM

</div>

<div id="Create-EKS-Cluster-using-eksctl-Create-Cluster-Config">

### Create Cluster Config

Create a file named `cluster-config.yaml`:

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: my-eks-cluster
  region: us-east-1
  version: "1.28"

managedNodeGroups:
  - name: managed-ng-1
    instanceType: t3.medium
    desiredCapacity: 2
    minSize: 1
    maxSize: 3
    volumeSize: 20
    labels:
      role: worker
    tags:
      Environment: dev
      Project: eks-tutorial

vpc:
  cidr: "10.0.0.0/16"
  subnets:
    public:
      us-east-1a:
        id: subnet-xxxxxxxx
      us-east-1b:
        id: subnet-yyyyyyyy
    private:
      us-east-1a:
        id: subnet-zzzzzzzz
      us-east-1b:
        id: subnet-wwwwwwww
```

For a simple cluster (auto-create VPC):

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: my-eks-cluster
  region: us-east-1
  version: "1.28"

managedNodeGroups:
  - name: managed-ng-1
    instanceType: t3.medium
    desiredCapacity: 2
```

</div>

<div id="Create-EKS-Cluster-using-eksctl-Create-Cluster">

### Create Cluster

```bash
eksctl create cluster -f cluster-config.yaml
```

This will take 15-20 minutes to complete. The process includes:
1. Creating VPC and subnets
2. Creating EKS control plane
3. Creating IAM roles
4. Launching worker nodes
5. Configuring kubectl context

Monitor the progress:

```bash
eksctl get cluster --name my-eks-cluster --region us-east-1
```

</div>

<div id="Create-EKS-Cluster-using-eksctl-Verify-Cluster">

### Verify Cluster

```bash
# List clusters
eksctl get cluster

# Get cluster info
eksctl get cluster --name my-eks-cluster

# Verify kubectl context
kubectl config current-context
kubectl config get-contexts

# List nodes
kubectl get nodes

# Check cluster info
kubectl cluster-info
```

Expected output:

```
NAME              REGION          EKSCTL CREATED
my-eks-cluster    us-east-1       True
```

```bash
kubectl get nodes
```

```
NAME                            STATUS   ROLES    AGE   VERSION
ip-192-168-1-100.ec2.internal   Ready    <none>   5m    v1.28.0
ip-192-168-1-101.ec2.internal   Ready    <none>   5m    v1.28.0
```

</div>

<div id="Create-EKS-Cluster-using-eksctl-Delete-Cluster">

### Delete Cluster

⚠️ **Warning**: This will delete all resources including VPC (if auto-created)

```bash
eksctl delete cluster --name my-eks-cluster --region us-east-1
```

This will take 5-10 minutes to complete.

</div>

---

## EKS Cluster Management

<div id="EKS-Cluster-Management-Scaling-Node-Groups">

### Scaling Node Groups

#### Scale a node group:

```bash
# Scale to 3 nodes
eksctl scale nodegroup --cluster=my-eks-cluster --name=managed-ng-1 --nodes=3 --region=us-east-1

# Or update the config file
eksctl update nodegroup --cluster=my-eks-cluster --name=managed-ng-1 --nodes=3 --region=us-east-1
```

#### Enable autoscaling:

```yaml
managedNodeGroups:
  - name: managed-ng-1
    instanceType: t3.medium
    desiredCapacity: 2
    minSize: 1
    maxSize: 5
    labels:
      role: worker
```

```bash
eksctl update cluster -f cluster-config.yaml
```

</div>

<div id="EKS-Cluster-Management-Update-Kubernetes-Version">

### Update Kubernetes Version

```bash
# Check available versions
eksctl get cluster --name my-eks-cluster

# Update control plane
eksctl upgrade cluster --name my-eks-cluster --version 1.29 --approve

# Update node group
eksctl upgrade nodegroup --cluster=my-eks-cluster --name=managed-ng-1 --version 1.29
```

</div>

<div id="EKS-Cluster-Management-Cluster-Autoscaling">

### Cluster Autoscaler

Install the Cluster Autoscaler:

```bash
# Add Helm repo
helm repo add autoscaler https://kubernetes.github.io/autoscaler
helm repo update

# Install Cluster Autoscaler
helm install cluster-autoscaler autoscaler/cluster-autoscaler \
  --namespace kube-system \
  --set autoDiscovery.clusterName=my-eks-cluster \
  --set awsRegion=us-east-1 \
  --set rbac.create=true \
  --set rbac.serviceAccount.create=true \
  --set rbac.serviceAccount.name=cluster-autoscaler
```

</div>

<div id="EKS-Cluster-Management-Managing-Add-ons">

### Managing Add-ons

List available add-ons:

```bash
eksctl get addon --cluster my-eks-cluster
```

Install an add-on:

```bash
eksctl create addon --cluster my-eks-cluster --name vpc-cni --version v1.15.0-eksbuild.1 --force
```

Update an add-on:

```bash
eksctl update addon --cluster my-eks-cluster --name vpc-cni --version v1.16.0-eksbuild.1
```

Delete an add-on:

```bash
eksctl delete addon --cluster my-eks-cluster --name vpc-cni
```

</div>

---

## Deploy Applications on EKS

<div id="Deploy-Applications-on-EKS-Deploy-Nginx-Deployment">

### Deploy Nginx Deployment

Create a deployment file `nginx-deployment.yaml`:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "128Mi"
            cpu: "250m"
          limits:
            memory: "256Mi"
            cpu: "500m"
```

Apply the deployment:

```bash
kubectl apply -f nginx-deployment.yaml
kubectl get deployments
kubectl get pods
```

</div>

<div id="Deploy-Applications-on-EKS-Expose-as-LoadBalancer">

### Expose as LoadBalancer

Create a service file `nginx-service.yaml`:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
  annotations:
    service.beta.kubernetes.io/aws-load-balancer-type: "nlb"
spec:
  type: LoadBalancer
  selector:
    app: nginx
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
```

Apply the service:

```bash
kubectl apply -f nginx-service.yaml
kubectl get svc nginx-service
```

Wait for the LoadBalancer to be provisioned (2-3 minutes):

```bash
kubectl get svc nginx-service -w
```

</div>

<div id="Deploy-Applications-on-EKS-Access-Application">

### Access Application

Get the LoadBalancer URL:

```bash
kubectl get svc nginx-service
```

```
NAME            TYPE           EXTERNAL-IP                                                                PORT(S)        AGE
nginx-service   LoadBalancer   a4b3c2d1e5f6g7h8i9j0.elb.us-east-1.amazonaws.com   80:31234/TCP   2m
```

Access the application:

```bash
curl http://a4b3c2d1e5f6g7h8i9j0.elb.us-east-1.amazonaws.com
```

Or open the URL in your browser.

</div>

<div id="Deploy-Applications-on-EKS-Clean-up">

### Clean up

```bash
kubectl delete service nginx-service
kubectl delete deployment nginx-deployment
```

</div>

---

## EKS Storage Classes

<div id="EKS-Storage-Classes-Default-Storage-Classes">

### Default Storage Classes

EKS comes with default storage classes:

```bash
kubectl get storageclass
```

```
NAME                            PROVISIONER             RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
gp2 (default)                   kubernetes.io/aws-ebs   Delete          WaitForFirstConsumer   false                  3d
gp3                             kubernetes.io/aws-ebs   Delete          WaitForFirstConsumer   true                   3d
```

- **gp2**: General Purpose SSD (older generation)
- **gp3**: General Purpose SSD (newer, cheaper, better performance)

</div>

<div id="EKS-Storage-Classes-Create-Persistent-Volume-Claim">

### Create Persistent Volume Claim

Create a PVC file `pvc.yaml`:

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: ebs-pvc
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: gp3
  resources:
    requests:
      storage: 10Gi
```

Apply the PVC:

```bash
kubectl apply -f pvc.yaml
kubectl get pvc
```

</div>

<div id="EKS-Storage-Classes-Deploy-Application-with-PVC">

### Deploy Application with PVC

Create a deployment with PVC:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-with-pvc
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx-pvc
  template:
    metadata:
      labels:
        app: nginx-pvc
    spec:
      volumes:
      - name: nginx-storage
        persistentVolumeClaim:
          claimName: ebs-pvc
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
        volumeMounts:
        - name: nginx-storage
          mountPath: /usr/share/nginx/html
```

Apply and verify:

```bash
kubectl apply -f nginx-pvc-deployment.yaml
kubectl get pods
kubectl exec -it <pod-name> -- df -h
```

</div>

---

## EKS Ingress with AWS Load Balancer Controller

<div id="EKS-Ingress-with-AWS-Load-Balancer-Controller-What-is-AWS-Load-Balancer-Controller">

### What is AWS Load Balancer Controller?

The AWS Load Balancer Controller manages AWS Elastic Load Balancers for a Kubernetes cluster. It provisions:
- Application Load Balancers (ALB) for Ingress resources
- Network Load Balancers (NLB) for Services of type LoadBalancer

</div>

<div id="EKS-Ingress-with-AWS-Load-Balancer-Controller-Install-IAM-Policies">

### Install IAM Policies

Create IAM OIDC provider for your cluster:

```bash
eksctl utils associate-iam-oidc-provider --cluster=my-eks-cluster --approve
```

Download IAM policy:

```bash
curl -O https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/main/docs/install/iam_policy.json
```

Create IAM policy:

```bash
aws iam create-policy \
    --policy-name AWSLoadBalancerControllerIAMPolicy \
    --policy-document file://iam_policy.json
```

Create IAM role and service account:

```bash
eksctl create iamserviceaccount \
  --cluster=my-eks-cluster \
  --namespace=kube-system \
  --name=aws-load-balancer-controller \
  --attach-policy-arn=arn:aws:iam::<ACCOUNT_ID>:policy/AWSLoadBalancerControllerIAMPolicy \
  --approve \
  --override-existing-serviceaccounts
```

</div>

<div id="EKS-Ingress-with-AWS-Load-Balancer-Controller-Install-Controller">

### Install Controller

Add Helm repo:

```bash
helm repo add eks https://aws.github.io/eks-charts
helm repo update
```

Install the controller:

```bash
helm install aws-load-balancer-controller eks/aws-load-balancer-controller \
  -n kube-system \
  --set clusterName=my-eks-cluster \
  --set serviceAccount.create=false \
  --set serviceAccount.name=aws-load-balancer-controller \
  --set region=us-east-1 \
  --set vpcId=vpc-xxxxxxxx
```

Verify installation:

```bash
kubectl -n kube-system get deployment aws-load-balancer-controller
```

</div>

<div id="EKS-Ingress-with-AWS-Load-Balancer-Controller-Create-Ingress">

### Create Ingress

First, create an IngressClass:

```yaml
apiVersion: networking.k8s.io/v1
kind: IngressClass
metadata:
  name: alb
spec:
  controller: ingress.k8s.aws/alb
```

Create an Ingress resource:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx-ingress
  annotations:
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
spec:
  ingressClassName: alb
  rules:
  - http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: nginx-service
            port:
              number: 80
```

Apply the Ingress:

```bash
kubectl apply -f ingress.yaml
kubectl get ingress
```

</div>

---

## EKS Security Best Practices

<div id="EKS-Security-Best-Practices-IAM-Roles-for-Service-Accounts">

### IAM Roles for Service Accounts (IRSA)

IRSA allows you to assign IAM roles to Kubernetes service accounts, providing fine-grained permissions to pods.

Create IAM policy:

```bash
aws iam create-policy \
    --policy-name MyS3ReadPolicy \
    --policy-document '{
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "s3:GetObject"
                ],
                "Resource": "arn:aws:s3:::my-bucket/*"
            }
        ]
    }'
```

Create IAM role and service account:

```bash
eksctl create iamserviceaccount \
  --cluster=my-eks-cluster \
  --namespace=default \
  --name=my-s3-sa \
  --attach-policy-arn=arn:aws:iam::<ACCOUNT_ID>:policy/MyS3ReadPolicy \
  --approve \
  --override-existing-serviceaccounts
```

Use the service account in your pod:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: s3-reader
spec:
  serviceAccountName: my-s3-sa
  containers:
  - name: aws-cli
    image: amazon/aws-cli:latest
    command: ["sleep", "3600"]
```

</div>

<div id="EKS-Security-Best-Practices-Pod-Security-Standards">

### Pod Security Standards

EKS supports Pod Security Standards (PSS) to enforce security policies.

Create a Pod Security Policy:

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: secure-namespace
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/audit: restricted
    pod-security.kubernetes.io/warn: restricted
```

</div>

<div id="EKS-Security-Best-Practices-Network-Policies">

### Network Policies

Install a network policy plugin (Calico):

```bash
kubectl apply -f https://raw.githubusercontent.com/aws/amazon-vpc-cni-k8s/master/config/master/calico.yaml
```

Create a network policy:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
  namespace: default
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress
```

</div>

<div id="EKS-Security-Best-Practices-Secrets-Management">

### Secrets Management

#### Option 1: Kubernetes Secrets

```bash
kubectl create secret generic my-secret --from-literal=password=my-password
```

#### Option 2: AWS Secrets Manager

Install AWS Secrets Manager and CSI Driver:

```bash
helm repo add secrets-store-csi-driver https://kubernetes-sigs.github.io/secrets-store-csi-driver/charts
helm install -n kube-system csi-secrets-store secrets-store-csi-driver/secrets-store-csi-driver
```

Create SecretProviderClass:

```yaml
apiVersion: secrets-store.csi.x-k8s.io/v1
kind: SecretProviderClass
metadata:
  name: aws-secrets
spec:
  provider: aws
  parameters:
    objects: |
      - objectName: "my-secret"
        objectType: "secretsmanager"
```

</div>

---

## EKS Monitoring and Logging

<div id="EKS-Monitoring-and-Logging-CloudWatch-Container-Insights">

### CloudWatch Container Insights

Install CloudWatch Container Insights:

```bash
# Create service account
eksctl create iamserviceaccount \
  --cluster=my-eks-cluster \
  --namespace=amazon-cloudwatch \
  --name=cloudwatch-agent \
  --attach-policy-arn=arn:aws:iam::aws:policy/CloudWatchAgentServerPolicy \
  --approve

# Install Fluent Bit
kubectl apply -f https://raw.githubusercontent.com/aws-samples/amazon-cloudwatch-container-insights/latest/k8s-deployment-manifest-templates/deployment-mode/daemonset/container-insights-monitoring/quickstart/cwagent-fluent-bit-quickstart.yaml
```

Access CloudWatch Console to view metrics and logs.

</div>

<div id="EKS-Monitoring-and-Logging-Prometheus-and-Grafana">

### Prometheus and Grafana

Install Prometheus Operator:

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

helm install prometheus prometheus-community/kube-prometheus-stack \
  --namespace monitoring \
  --create-namespace
```

Access Grafana:

```bash
kubectl port-forward svc/prometheus-grafana 3000:80 -n monitoring
```

Default credentials:
- Username: `admin`
- Password: `prom-operator`

</div>

<div id="EKS-Monitoring-and-Logging-EKS-Control-Plane-Logging">

### EKS Control Plane Logging

Enable control plane logging:

```bash
aws eks update-cluster-config \
  --region us-east-1 \
  --name my-eks-cluster \
  --logging '{"clusterLogging":[{"types":["api","audit","authenticator","controllerManager","scheduler"],"enabled":true}]}'
```

View logs in CloudWatch Logs.

</div>

---

## EKS Cost Optimization

<div id="EKS-Cost-Optimization-Right-Sizing-Node-Groups">

### Right-Sizing Node Groups

Choose appropriate instance types based on your workload:

- **t3.small/t3.medium**: Development/testing
- **t3.large/t3.xlarge**: Production small workloads
- **m5.large/m5.xlarge**: Memory-intensive workloads
- **c5.large/c5.xlarge**: Compute-intensive workloads

Monitor resource usage:

```bash
kubectl top nodes
kubectl top pods
```

</div>

<div id="EKS-Cost-Optimization-Spot-Instances">

### Spot Instances

Use spot instances for cost savings (up to 90% discount):

```yaml
managedNodeGroups:
  - name: spot-ng
    instanceType: t3.medium
    desiredCapacity: 2
    minSize: 1
    maxSize: 5
    spot: true
    labels:
      role: spot-worker
```

</div>

<div id="EKS-Cost-Optimization-Autoscaling">

### Autoscaling

Configure horizontal pod autoscaler:

```bash
kubectl autoscale deployment nginx-deployment --cpu-percent=50 --min=1 --max=10
```

Configure cluster autoscaler (see earlier section).

</div>

<div id="EKS-Cost-Optimization-Cleanup-Resources">

### Cleanup Resources

Regularly clean up unused resources:

```bash
# Delete unused load balancers
kubectl delete svc <unused-service>

# Delete unused PVCs
kubectl delete pvc <unused-pvc>

# Delete unused namespaces
kubectl delete namespace <unused-namespace>
```

Use AWS Trusted Advisor to identify cost optimization opportunities.

</div>

---

## 🎯 Summary

In this tutorial, we covered:

✅ **Introduction to AWS EKS** - What it is and why use it  
✅ **Prerequisites** - AWS CLI, kubectl, eksctl setup  
✅ **Cluster Creation** - Using eksctl to create and manage clusters  
✅ **Application Deployment** - Deploying and exposing applications  
✅ **Storage** - Using EBS volumes with PVCs  
✅ **Ingress** - AWS Load Balancer Controller setup  
✅ **Security** - IRSA, Pod Security, Network Policies  
✅ **Monitoring** - CloudWatch, Prometheus, Grafana  
✅ **Cost Optimization** - Right-sizing, Spot instances, autoscaling  

---

## 📚 Additional Resources

- [AWS EKS Documentation](https://docs.aws.amazon.com/eks/)
- [eksctl Documentation](https://eksctl.io/)
- [AWS Load Balancer Controller](https://kubernetes-sigs.github.io/aws-load-balancer-controller/)
- [EKS Best Practices Guide](https://aws.github.io/aws-eks-best-practices/)

---

## 🤝 Contributing

Found an issue or want to improve this tutorial? Please open an issue or submit a pull request!

---

**Happy Learning! 🚀**
