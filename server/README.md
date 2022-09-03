# Digital flipbook server

---

## Table of contents

1. [Setup](#setup)
2. [API Endpoints](#api-endpoints)
   1. [GET `/video/:id`](#get-videoid)
   2. [GET `/assets/videos/video:id/frames/:image_frame_name`](#get-assetsvideosvideoidframesimage_frame_name)

---

## Setup

1. Run `yarn` inside of this `server/` directory to install the required dependencies.
2. Extract the `videos.zip` in `public/assets/videos/` to the same place.
   - If extracted correctly, the path to `video1/` should be `public/assets/videos/video1/` from `server/`.
3. Run `yarn start` from this `server/` directory to bring up the server (should be hosted on http://localhost:3001 by default).

## API endpoints

### GET `/video/:id`

#### Description

Gets information about the video and the paths to the frames of the video.

#### Params

| Param | Type   | Description     | Optional | Notes                                  |
| ----- | ------ | --------------- | -------- | -------------------------------------- |
| `:id` | Number | ID of the video |          | Only the ID `1` is supported currently |

#### Params

| Query    | Type   | Description                  | Optional | Notes                                         |
| -------- | ------ | ---------------------------- | -------- | --------------------------------------------- |
| `offset` | Number | Frame index to start getting | Yes      | Defaults to 0                                 |
| `count`  | Number | Number of frames to get      | Yes      | Defaults to (total_length_of_frames - offset) |

#### Response

| Field            | Type   | Description                              | Optional | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | ------ | ---------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`             | Number | ID of the video                          |          |                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `name`           | String | Name of the video                        |          |                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `description`    | String | Description about the video              | Yes      | May be blank (`""`)                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `author`         | String | Author/creator of the video              | Yes      | May be blank (`""`)                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `source`         | String | Where the video is from                  | Yes      | May be blank (`""`)                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `numTotalFrames` | Number | Number of total frames in this video     |          | Max number of frames is 600                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `frames`         | Array  | Paths for each image frame for the video |          | Max is 600 frames. The paths will always follow the pattern `assets/videos/video{id}/frames/{frame_number}.jpg`. Example: `assets/videos/video1/frames/001.jpg`. You can then combine this path with the hostname (`http://localhost:3001`) to get the actual image (e.g. `http://localhost:3001/assets/videos/video1/frames/001.jpg`). For more information on this endpoint, see [below](#get-assetsvideosvideoidframesimage_frame_name). |

##### Example Request

```
	GET http://localhost:3001/video/1?offset=10&count=100
```

##### Example Response

```
{
  "id": 1,
  "name": "Rooftop dinner",
  "description": "Dinner on the rooftop",
  "author": "",
  "source": "Pexels",
  "numTotalFrames": 600,
  "frames": [
	"assets/videos/video1/frames/011.jpg",
	"assets/videos/video1/frames/012.jpg",
	"assets/videos/video1/frames/013.jpg",
	"assets/videos/video1/frames/014.jpg",
	"assets/videos/video1/frames/015.jpg",
	...
	"assets/videos/video1/frames/110.jpg",
	]
}
```

### GET `/assets/videos/video:id/frames/:image_frame_name`

#### Description

Gets the image for the frame specified in the URL

#### Params

| Param               | Type   | Description                  | Optional | Notes                                                                                                                        |
| ------------------- | ------ | ---------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `:id`               | Number | ID of the video              |          | Only the ID `1` is supported currently                                                                                       |
| `:image_frame_name` | String | name of image frame in video |          | The image frame name will always be a number with 3 digits and will have always have the JPG file extension (e.g. `001.jpg`) |

#### Response

The response is the image asset.

##### Example Request

```
GET http://localhost:3001/assets/videos/video1/frames/001.jpg
```

##### Example Response

![Image of frame 001.jpg for video1](./README-assets/images/001.jpg)
