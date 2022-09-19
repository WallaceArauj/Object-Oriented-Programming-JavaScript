var Cliente = /** @class */ (function () {
    function Cliente(nome) {
        this.nome = nome;
    }
    Cliente.prototype.MudarNome = function (nome, codigoAutorizacao) {
        if (codigoAutorizacao == 123456) {
            this.nome = nome;
            return 'Nome alterado com sucesso!';
        }
        else {
            return 'Operação não autorizada!';
        }
    };
    Cliente.prototype.GetNome = function () {
        return this.nome;
    };
    return Cliente;
}());
var nome = prompt('Digite o nome do cliente');
var cliente = new Cliente(nome);
console.log(cliente.GetNome());
