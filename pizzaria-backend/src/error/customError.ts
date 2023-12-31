export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidName extends CustomError {
  constructor() {
    super(400, "Nome inválido");
  }
}

export class InvalidRecipe extends CustomError {
  constructor() {
    super(400, "Receita não encontrada");
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Email inválido");
  }
}

export class InvalidRole extends CustomError {
  constructor() {
    super(400, "Cargo inválido");
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Senha inválida");
  }
}

export class UserNotFound extends CustomError {
  constructor() {
    super(404, "Usuário não encontrado");
  }
}

export class Unauthorized extends CustomError {
  constructor() {
    super(401, "Usuário não autorizado");
  }
}
export class UserAlreadyExist extends CustomError {
  constructor() {
    super(401, "Usuário já existe");
  }
}

export class InvalidZipcode extends CustomError {
  constructor() {
    super(400, "Cep Inválido")
  }
}