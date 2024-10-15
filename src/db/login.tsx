import * as SQLite from 'expo-sqlite';

// Função para abrir o banco de dados
const openDb = async () => {
  return await SQLite.openDatabaseAsync('meuBanco.db');
};

// Função para criar a tabela de usuários
export const criarTabelaUsuarios = async () => {
  const db = await openDb();
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT,
      senha TEXT
    );
  `);
};

// Função para inserir um usuário fictício
export const inserirUsuarioFicticio = async () => {
  const db = await openDb();
  await db.runAsync(
    'INSERT INTO usuarios (email, senha) VALUES (?, ?)',
    ['usuario@teste.com', 'senha123']
  );
  console.log("Usuário fictício inserido");
};

// Função para validar o login
export const validarLogin = async (email: string, senha: string, callback: (valido: boolean) => void) => {
  const db = await openDb();
  const result = await db.getAllAsync(
    'SELECT * FROM usuarios WHERE email = ? AND senha = ?',
    [email, senha]
  );

  if (result.length > 0) {
    callback(true); // Login válido
  } else {
    callback(false); // Login inválido
  }
};
