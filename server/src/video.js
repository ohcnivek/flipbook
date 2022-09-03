const path = require("path");
const fs = require("fs");

const allVideosDirFromPublic = "assets/videos/";
const allVideosDir = path.join(
  path.join(__dirname, "../public"),
  allVideosDirFromPublic
);
const totalVideos = fs.readdirSync(allVideosDir).length;

/**
 * Checks if the given ID is a valid video ID.
 *
 * @param {number} id video id
 * @returns true if valid, false otherwise
 */
function isValidVideoID(id) {
  return Number(id) && id >= 1 && id <= totalVideos;
}

/**
 * Prepends the relative path to the file name.
 *
 * @param {string} videoDir directory of the video the frames belong to
 * @param {Array<string>} frames file names of all the frames (no paths)
 * @returns
 */
function convertFramesToRelativePath(videoDir, frames) {
  if (!Array.isArray(frames)) {
    return [];
  }
  return frames.map((filePath) => {
    return allVideosDirFromPublic + videoDir + "frames/" + filePath;
  });
}

/**
 * Creates the response for the /video/:id endpoint. The response is populated
 * with the given video ID if it is valid.
 *
 * @param {*} fastify fastify instance
 * @param {number} id video id
 * @param {number} offset frame index to start fetching from
 * @param {number} count number of frames to return
 * @returns Object containing value, whhich is whetther or not the id is valid, and ret, which is the response object for the client.
 */
function createVideoResponse(fastify, id, offset, count) {
  let valid = false;
  if (!isValidVideoID(id)) {
    return { valid, ret: "Invalid video ID" };
  }

  const videoDir = `video${id}/`;
  try {
    const infoJSON = require(path.join(allVideosDir, videoDir + "info.json"));
    valid = true;
    let startingFrameIdx = Number(offset);
    if (!startingFrameIdx) {
      startingFrameIdx = 0;
    }

    let numWantedFrames = Number(count);
    if (
      !numWantedFrames ||
      startingFrameIdx + numWantedFrames > infoJSON.frames.length
    ) {
      numWantedFrames = infoJSON.frames.length - startingFrameIdx;
    }

    let frames = [];
    if (Array.isArray(frames)) {
      frames = infoJSON.frames.slice(
        startingFrameIdx,
        startingFrameIdx + numWantedFrames
      );
    }

    return {
      valid,
      ret: {
        ...infoJSON,
        frames: convertFramesToRelativePath(videoDir, frames),
      },
    };
  } catch (err) {
    fastify.log.error(err);
    return { valid, ret: "Invalid video ID" };
  }
}

async function routes(fastify, options) {
  fastify.get("/video/:id", async (request, reply) => {
    const res = createVideoResponse(
      fastify,
      request.params.id,
      request.query.offset,
      request.query.count
    );
    if (!res.valid) {
      return reply.code(400).send(res.ret);
    }
    reply.code(200).send(res.ret);
  });
}

module.exports = routes;
