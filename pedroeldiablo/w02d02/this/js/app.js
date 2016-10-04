function foo() {
  console.log("===========================");
  console.log("I am a function called foo!");
  console.log("`this` currently refers to:", this);
  console.log("`this` is a(n) " + typeof this);
  console.log("===========================");
  console.log("");
}

var object1 ={
  name:"object1",
  bar :foo
};

// implicit binding
object1.bar();

var bat =object1.bar;

bat();

var object2 = {
  name:"object2",
  baz: object1.bar
};

object2.baz();
