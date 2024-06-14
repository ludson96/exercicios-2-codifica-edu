/* Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema deverá ser capaz de interagir com o usuário através do console do navegador e manter um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as informações. Não é necessário interface gráfica, apenas funcionalidade lógica.

  1. Estrutura de Dados :
    ○ Hotel : Cada hotel deve ser um objeto com propriedades para id, nome, cidade, quartos totais e quartos disponiveis.
    ○ Reservas : Cada reserva deve ser um objeto contendo idReserva, idHotel, e nomeCliente.

  2. Funcionalidades :
    ○ Adicionar hotéis : Permitir que o usuário adicione novos hotéis ao sistema.
    ○ Buscar hotéis por cidade : Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica.
    ○ Fazer reserva : Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.
    ○ Cancelar reserva : Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente. ○ Listar reservas : Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.

  3. Regras de Negócio :
    ○ Um hotel só pode aceitar reservas se houver quartos disponíveis. 
    ○ As reservas devem ser identificadas por um ID único e associadas a um único hotel.

  4. Desafios Adicionais (Opcionais):
    ○ Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos.
    ○ Gerar relatórios de ocupação para um hotel.
    ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto do hotel. */


const sistemaReservas = (() => {
  let hoteis = [];
  let reservas = [];
  let proximoIdHotel = 1;
  let proximoIdReserva = 1;

  return {
      adicionarHotel: function(nome, cidade, quartosTotais) {
          const novoHotel = {
              id: proximoIdHotel++,
              nome,
              cidade,
              quartosTotais,
              quartosDisponiveis: quartosTotais
          };
          hoteis.push(novoHotel);
          console.log(`Hotel "${nome}" adicionado com sucesso.`);
      },

      buscarHoteisPorCidade: function(cidade) {
          const hoteisNaCidade = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());
          if (hoteisNaCidade.length > 0) {
              console.log(`Hotéis disponíveis em ${cidade}:`);
              hoteisNaCidade.forEach(hotel => {
                  console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
              });
          } else {
              console.log(`Nenhum hotel disponível em ${cidade}.`);
          }
      },

      fazerReserva: function(idHotel, nomeCliente) {
          const hotel = hoteis.find(h => h.id === idHotel);
          if (hotel) {
              if (hotel.quartosDisponiveis > 0) {
                  const novaReserva = {
                      idReserva: proximoIdReserva++,
                      idHotel: idHotel,
                      nomeCliente: nomeCliente
                  };
                  reservas.push(novaReserva);
                  hotel.quartosDisponiveis--;
                  console.log(`Reserva feita com sucesso para ${nomeCliente} no hotel "${hotel.nome}".`);
              } else {
                  console.log(`Não há quartos disponíveis no hotel "${hotel.nome}".`);
              }
          } else {
              console.log(`Hotel com ID ${idHotel} não encontrado.`);
          }
      },

      cancelarReserva: function(idReserva) {
          const reserva = reservas.find(r => r.idReserva === idReserva);
          if (reserva) {
              const hotel = hoteis.find(h => h.id === reserva.idHotel);
              if (hotel) {
                  reservas = reservas.filter(r => r.idReserva !== idReserva);
                  hotel.quartosDisponiveis++;
                  console.log(`Reserva cancelada com sucesso para ${reserva.nomeCliente} no hotel "${hotel.nome}".`);
              }
          } else {
              console.log(`Reserva com ID ${idReserva} não encontrada.`);
          }
      },

      listarReservas: function() {
          if (reservas.length > 0) {
              console.log(`Lista de reservas:`);
              reservas.forEach(reserva => {
                  const hotel = hoteis.find(h => h.id === reserva.idHotel);
                  console.log(`ID Reserva: ${reserva.idReserva}, Nome do Cliente: ${reserva.nomeCliente}, Hotel: ${hotel.nome}, Cidade: ${hotel.cidade}`);
              });
          } else {
              console.log(`Nenhuma reserva encontrada.`);
          }
      }
  };
})();

// Exemplo de uso
sistemaReservas.adicionarHotel('Hotel Central', 'São Paulo', 50);
sistemaReservas.adicionarHotel('Hotel Praia', 'Rio de Janeiro', 30);
sistemaReservas.buscarHoteisPorCidade('São Paulo');
sistemaReservas.fazerReserva(1, 'João Silva');
sistemaReservas.fazerReserva(1, 'Maria Oliveira');
sistemaReservas.listarReservas();
sistemaReservas.cancelarReserva(1);
sistemaReservas.listarReservas();
