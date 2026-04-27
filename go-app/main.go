package main

import (
	"fmt"
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello from Go in Docker! 🚀\n")
	fmt.Fprintf(w, "Request: %s %s\n", r.Method, r.URL.Path)
}

func main() {
	http.HandleFunc("/", handler)
	fmt.Println("Server starting on 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
