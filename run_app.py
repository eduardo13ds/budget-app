#!/usr/bin/env python3
"""
Personal Budget Application - Local Web Server Launcher
Runs a local HTTP server and automatically opens the browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Concise logging
        sys.stderr.write(f"[{self.log_date_time_string()}] {format % args}\n")

def main():
    os.chdir(DIRECTORY)
    # Allow port reuse to prevent 'Address already in use' errors
    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            url = f"http://localhost:{PORT}/index.html"
            print("=" * 60)
            print(f" Budgeting App is running locally!")
            print(f" Serving directory: {DIRECTORY}")
            print(f" URL: {url}")
            print(" Press Ctrl+C in this terminal to stop the server.")
            print("=" * 60)
            
            # Auto open browser
            webbrowser.open(url)
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server. Goodbye!")
    except Exception as e:
        print(f"\nError launching server on port {PORT}: {e}")
        # Try alternate port
        alt_port = 8085
        try:
            with socketserver.TCPServer(("", alt_port), Handler) as httpd:
                url = f"http://localhost:{alt_port}/index.html"
                print(f"Trying alternative port: {url}")
                webbrowser.open(url)
                httpd.serve_forever()
        except Exception as e2:
            print(f"Could not bind alternate port: {e2}")

if __name__ == "__main__":
    main()
