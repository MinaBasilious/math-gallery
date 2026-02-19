# Development

## Cloning the project

```bash
git clone https://github.com/MinaBasilious/math-gallery.git
cd math-gallery
```

## Installing dev dependencies

### Hugo

```bash
# make sure you have go installed
# go.dev/doc/install
go install github.com/gohugoio/hugo@latest
```

### pre-commit

pre-commit formats everything before pushing ensuring consistency

```bash
# make sure you have uv installed
# docs.astral.sh/uv/getting-started/installation
uv tool install pre-commit
```

## Running local server for testing

```bash
hugo serve
```
