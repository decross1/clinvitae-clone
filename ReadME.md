# Project: CLoneVitae

<a href="https://youtu.be/2am2NXr0g-w"><img src="https://media.giphy.com/media/uipcohJ8QIS7Ekykto/giphy.gif" title="CloneVitae Demo" width="70%" border="10"/></a>

## Contributor
  - Derrick Cross

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

  Type gene names into the search bar
  Choose a gene from the search list, and see a rendered table output of all the potential variants of that gene

## Requirements

- Node 8.9.1
- Postgresql 10.1
- R 3.4

## Development

Install the necessary dependencies from [Installing Dependencies](#installing-dependencies)

Start Webpack:
$ run npm start

Start Server
$ run npm server
  
open your browser, and write the following url:
http://localhost:3000/

If you have any more questions, email Derrick at decross1@gmail.com


### Initializing your local database
```
Navigate to directory database/index.js
Change user to 'postgres'
Navigate to root directory in terminal
run command psql -d template -a -f schema.sql
```

### Installing Dependencies

From within the root directory:

```sh
npm install
```


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
