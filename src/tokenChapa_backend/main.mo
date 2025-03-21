import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";


actor TokenChapa { 
  // Propietario del token
  let owner: Principal = Principal.fromText("zsqst-kaz4z-cih4c-wcz32-c5sna-qtjje-d76zl-j3nma-ujppk-lemoq-fae");
  // Suministro total de tokens
  let totalSuply: Nat = 1000000000;
  // Simbolo del token
  let _symbol: Text = "CHAPA";

  // Almacena los saldos durante las actualizaciones del caniser
  private stable var balanceEntries: [(Principal, Nat)] = [];
  // Almcena los saldos de cada usuario
  private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
  // Si el HashMap está vacío, asigna todo el suministro al propietario
  if(balances.size() < 1) {
    balances.put(owner, totalSuply);
  };
  
  // Obtiene el saldo del usuario
  public query func balanceOf(who: Principal): async Nat {
    let balance: Nat = switch(balances.get(who)) {
      case null 0;
      case (?result) result;
    };

    return balance;
  };

  // faucet
  public shared({caller}) func payOut(): async Text {
    Debug.print(debug_show(caller));
    let amount: Nat = 10000;

    if(balances.get(caller) == null) {
      let result = await transfer(caller, amount);

      return result;
    } else {
      return "Already Claimed";
    };
  };


  public shared({caller}) func transfer(to: Principal, amount: Nat): async Text {
    let fromBalance = await balanceOf(caller);
    if(fromBalance > amount) {
      // Calcula el nuevo saldo del remitente
      let newFromBalance: Nat = fromBalance - amount;
      // Actualiza el saldo del remitente
      balances.put(caller, newFromBalance);

      // Obtiene el saldo del destinatario
      let toBalance = await balanceOf(to);
      // Calcula el nuevo saldo del destinatario
      let newToBalance = toBalance + amount;
      // Actualiza el saldo del destinatario
      balances.put(to, newToBalance);

      return "Success";
    } else {
      return "Indufficient Funds";
    };
  };

  public shared({caller}) func whoAmI(): async Principal {
    return caller;
  };

  // Se ejecuta antes de actualizar el canister
  system func preupgrade() {
    // Convierte el HashMap de saldos a un array para persistencia
    balanceEntries := Iter.toArray(balances.entries());
  };

  // Se ejecuta después de actualizar el canister
  system func postupgrade() {
    // Si el HashMap está vacío, asigna todo el suministro al propietario
    if(balances.size() < 1) {
      balances.put(owner, totalSuply);
    };
  };
};
