# Recurso 2024

## Passos para importação dos dados

1. Começei por adicionar o carater em falta `]` no final do dataset
2. Corri o script python `normalizer.py` para converter todas as listas em string para arrays, substitiu no `bookId` os espaços e `.` por `_` e remove caracteres de terminadores de linha incomuns.
3. Troquei o nome do campo do `bookId` para `_id`
4. Executei o container que já conta com o mongo import

### Resultado

```bash
mongo-seed-1  | 2024-06-06T15:07:15.467+0000	20000 document(s) imported successfully. 0 document(s) failed to import.
```

## Frontend

No `http://localhost:17001/authors/:idAutor` usei o nome do autor com `idAutor`.

# Aplicação completa

Para rodar a aplicação basta correr o comando:

```bash
docker compose up --build -d
```

O backend está disponível em `http://localhost:17000` e o frontend em `http://localhost:17001`.