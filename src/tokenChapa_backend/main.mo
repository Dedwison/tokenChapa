import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";


actor TokenChapa { 
  // Propietario del token
  let owner: Principal = Principal.fromText("zsqst-kaz4z-cih4c-wcz32-c5sna-qtjje-d76zl-j3nma-ujppk-lemoq-fae");
  // Suministro total de tokens
  let totalSuply: Nat = 1000000000;
  // Simbolo del token
  let symbol: Text = "CHAPA";

  // Almcena los saldos de cada usuario
  private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
  
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


};
