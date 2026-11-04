import http.server
import socketserver
import os
import webbrowser

PORT = 5173
DIRECTORY = "dist" if os.path.exists("dist") else "."

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

print(f"============================================================")
print(f"  AI TWINZ: THE AUTONOMOUS CUSTOMER TWIN")
print(f"  'Don't browse. Just ask.'")
print(f"============================================================")
print(f"Serving at: http://localhost:{PORT}")
print(f"Opening browser...")

webbrowser.open(f"http://localhost:{PORT}")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
