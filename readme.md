# Upgradeable Contract

## Pre-requisites

- Download VS Code
```
https://code.visualstudio.com/download
```

- install brew
```
- open terminal
- type and enter /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

```
- install NPM 

```
- open terminal
- brew update
- brew install node
- npm install -g grunt-cli
```

- install truffle
```
- open terminal
- npm install -g truffle
```

- install git
```
- open terminal
- brew install git
```


## Pull repository from Github

```
- open VS Code
- press fn + ~ to open console
- type git pull https://github.com/Adamant-Coin/Adamant.sol.git
```

## Install packages

- In the same VS Code terminal just type

```
- npm install
```

## Apply .env

- Open the project folder
- Create a new file called .env -> I'll send you the env details


## Deploy

- run trufle compile
- run truffle migrate --network mainnet

if successful, verify the contract

- run truffle run verify Adamant@0x825b1Fb286dd5De0dfE6D176cFe8d1d040621148 --network mainnet (change the contract address with the produced implementation contract)