CREATE TABLE MiTabla (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(1000),
    direccion VARCHAR(40),
    precio DECIMAL(10, 2),
    createdAt DATE DEFAULT CURRENT_DATE, -- Nueva columna "createdAt"
    CHECK (LENGTH(nombre) BETWEEN 1 AND 255 AND TRIM(nombre) <> ''),
    CHECK (descripcion IS NULL OR LENGTH(descripcion) <= 1000 AND TRIM(descripcion) <> ''),
    CHECK (direccion IS NULL OR LENGTH(direccion) <= 40 AND TRIM(direccion) <> ''),
    CHECK (precio IS NULL OR (precio >= 1))
);

"INSERT INTO inmueblesdb(nombre, descripcion, direccion, precio) VALUES ($1, $2, $3, $4) RETURNING *"
