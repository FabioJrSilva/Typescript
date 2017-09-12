"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PessoaDao_1 = require("./PessoaDao");
var Pessoa_1 = require("./Pessoa");
var dao = new PessoaDao_1.PessoaDao();
var pessoa = new Pessoa_1.default("", "");
dao.atualizar(pessoa);
