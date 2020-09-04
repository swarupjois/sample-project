#building client.
cd sample-project-client
npm install
npm run build

#building server.
cd ../sample-project-server
npm install

#bundling client to server.
mkdir -p public
cp -r ../sample-project-client/build public

