function convert() {
    from_base = parseInt (document.getElementById("base").value);
    value = parseInt (document.getElementById("num").value, from_base);
    if (value != NaN)
    {
      to_base = parseInt(document.getElementById("base2").value);
      new_value = value.toString(to_base);
      document.getElementById ('res').innerHTML = "Результат: " + new_value;
    }
  }