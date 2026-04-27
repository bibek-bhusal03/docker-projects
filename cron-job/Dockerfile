# select a base image to work with
FROM python:3.11-alpine

# decide a working directory
WORKDIR /app

# copy the job.py file to image
COPY job.py  ./

ENTRYPOINT ["python", "-u", "job.py"]
# CMD ["python", "-u", "job.py"]