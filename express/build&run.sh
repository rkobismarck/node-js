echo "We'll build our latest SW version."

docker build -t app-express .

echo "Build finished, sucesfully."

echo "We'll run our latest image:"

docker stop $(docker ps -q --filter ancestor=app-express )

echo "We're running the latest version."

docker run -d -p 8080:8080 app-express