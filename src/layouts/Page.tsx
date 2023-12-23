const PAGE = ({ title, children }: { title: string; children: unknown }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/htmx.org@1.9.10"></script>
        <title>{title}</title>
      </head>
      <body>
        <nav>
          <strong>My Website</strong>
          <a href="/about">About</a>
        </nav>
        {children}
      </body>
    </html>
  );
};

export default PAGE;
