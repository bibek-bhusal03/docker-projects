# Docker file with multi staged build
# Select base image to work with
# FROM golang:1.25.4 AS builder

# # set up working dir
# WORKDIR /build

# # copy go source code from current context to build
# COPY main.go .

# # copy go.mod app to build folder of builder docker
# COPY go.mod .

# # Build static binary
# RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .


# # Select another base image without go (makes image's storage lesser)
# FROM scratch

# # copy executable file from builder image to current alpine image
# COPY  --from=builder /build/app /app

# EXPOSE 8080

# # It takes a executable and when image runs run that executable
# ENTRYPOINT [ "/app" ]

FROM golang:1.25.4 AS builder

WORKDIR /build

COPY main.go .

COPY go.mod .

RUN go build -o app .

EXPOSE 8080

ENTRYPOINT ["./app"]

