// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('metro-config');

// module.exports = getDefaultConfig(__dirname);
module.exports = (async () => {
  const {
    resolver: { assetExts },
  } = await getDefaultConfig();
  return {
    resolver: {
      assetExts: [...assetExts, 'obj', 'mtl', 'JPG', 'jpeg', 'vrx', 'fbx', 'gltf', 'glb', 'hdr', 'tiff'],
    },
  };
})();
