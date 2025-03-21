import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";


actor TokenChapa { 
  // Propietario del token
  let owner: Principal = Principal.fromText("zsqst-kaz4z-cih4c-wcz32-c5sna-qtjje-d76zl-j3nma-ujppk-lemoq-fae");
  // Suministro total de tokens
  let totalSuply: Nat = 1000000000;
  // Simbolo del token
  let symbol: Text = "CHAPA";


  private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

  public query func balaceOf(who: Principal): async Nat {
    let balance: Nat = switch(balances.get(who)) {
      case null 0;
      case (?result) result;
    };

    return balance;
  };



};
