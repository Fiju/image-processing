# image-processing

## Abount

A simple API that process(resize) images if any dimensions are given and creates a thumbnail against those dimension for future use.

## API Overview

### Path

`/api/image`

### Query parameters

| Query param | Description                                                                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | Name of media available in `assets` folder, Right now their are four files available named [`luffy.jpg`, `nezuko.jpg`, `mt_fuji.jpg`, `sukuna.jpg`]. **Note: file extension is not included in url param** |
| width       | Custom image width - optional                                                                                                                                                                              |
| height      | Custom image height - optional                                                                                                                                                                             |

<br>

#### Sample call: `http://localhost:3001/api/image?name=luffy&width=400&height=200`

<br>

## Running the Project

### Install Dependencies

`npm install`

### Running Project in Dev mode

`npm run dev`

### Running Project in Production mode

`npm run prod`

### Building the Project

`npm run build`

### Running test

`npm run test`
