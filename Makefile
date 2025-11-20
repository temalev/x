deploy:
	rsync -avz --progress ./ root@195.161.68.45:~/xnogi
	ssh root@195.161.68.45 "\
		cd ~/xnogi && \
		docker rm -f xnogi || true && \
		docker build -t xnogi . && \
		docker image prune -f && \
		docker run --restart unless-stopped -d --name xnogi -p 3001:3000 xnogi \
	"
