# Development

## Cloning the project

```bash
git clone
```

## Installing dev dependencies

### Hugo

```bash
go install github.com/gohugoio/hugo@latest
```

### pre-commit

pre-commit formats everything before pushing ensuring consistency

```bash
# you have to have uv installed
# docs.astral.sh/uv/getting-started/installation
uv tool install pre-commit
```

## Running local server for testing

```bash
hugo serve
```
