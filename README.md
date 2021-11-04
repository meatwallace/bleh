# bleh

eh.

## dev setup

### \*nix

```sh
# TODO
```

### macOS

```sh
# install dependencies
brew install kind kubectl skaffold

# spin up a k8s cluster
kind create cluster

# confirm the cluster is good
kubectl cluster-info --context kind-kind

# run the full dev stack
yarn run dev:fullstack

# check pod status
kubectl describe pods
```
