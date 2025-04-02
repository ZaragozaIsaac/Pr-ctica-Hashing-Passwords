
import pg from 'pg';
import "dotenv/config";


const config = {
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: true,
        ca: `
-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUSpeAO5lDzToDqqJryHn8h21gub8wDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvMGZmNGQwNjgtYmExMi00ZGFkLWJiN2ItNDM0YjYxMzYw
N2M1IFByb2plY3QgQ0EwHhcNMjQxMTA2MTczMjM5WhcNMzQxMTA0MTczMjM5WjA6
MTgwNgYDVQQDDC8wZmY0ZDA2OC1iYTEyLTRkYWQtYmI3Yi00MzRiNjEzNjA3YzUg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBANIzJ2sq
gsSq1Z/GUGlt2n47ZKF0m3nEhbvecHmks/b38kIgKJU/tWyP+WDgwfA4sboaDMGJ
DeA4moIuSHKHEDwcth+srI+eIzFEPJIsfLADtjGvYvkuKBb8Aw3P9P41+Sfdde+x
OOhrQJ8r+n+DRJSrKMsW/yM2+D79iIqjJsgzK/NriVRbg7G4wU8PKi1qH2zsne5u
pDpRO/O8jt2Z/YYVglWQP5yE+FXLVFFgnveQuP70dtqhorAr0eMp/PjgQ3dx+0/D
1dWAVuUhrtcu930wRRWboj0Qru1cQkwDgwZ9bVL6JVCh9FeVHKxb80FjEXG217Rj
B50TGLTLd3arauKLl609gQopogXkMQGlC3uD1T7H1N3Xigh5jTQRy9Ls3dPcPeuW
GuqQj/3fktjZQJ6+X5yltVQ8ACTLnxKPPoCvX10cBFGd8SrUnBty99iJuarr0Uty
ydcpd9qWNXXvI0fyKbunQ2r3x0Ys68G3MWVprfmvsZ3J58nA/KPWfVU+IwIDAQAB
oz8wPTAdBgNVHQ4EFgQUDae5/iN7lzCl/3ZZEhZmYX7SzQowDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAEQeoARePb4MoCr+
frrBqZmKVVnsOd1k81GC0aXKMnDs0F1NkO/JDY9W9ApWHiknILqqyfUcXkYv1wv2
S9XvLTA5jFdrNTYigklPCjUiss3MggpcjoMssrwJdD8Ier7TNQO9dpTjyGdXWkir
aqiGvShl3ScP/iLb55GjK8g9EO9+0a9S86FMDBqYAFlo3RvVFpyldV6R/BKsg9JY
OLBgpXZ0lBMzlqYR/SAN3iRuUdNo/n1xE/dchgRevfGDWQNQ+ysjAW2d9uvbHcg4
B/FIMvoRlv9VpUj36nGPRtry71etyqBN2T1PPmKR2vmcRa89INzHwlao5NcJ0l27
eUtEJO3Y7Ks5TmKhN2ir7Mq/mcUapSLOwp9Z2AZJZNqXCbSpvsOP+nyWktBwwMm7
uz1ccJ0k8YWsqX5T8tzVWGIJGNcNAWPeZvMMphybh8UpdIUFeyXnT9IDh4WFyNST
A2skFAnxK0IPuOc+3c9syTYg7iWUPOdu3uncK0ZI4Jooc3q4IA==
-----END CERTIFICATE-----`,
    },
};

export const connectDB = () =>{
    const client = new pg.Client(config);
    client.connect();
    return client;
};