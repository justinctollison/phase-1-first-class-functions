function receivesAFunction(spy)
{
    spy();
}

function spy()
{
    receivesAFunction()
}

function returnsANamedFunction()
{
   return function name (){}
}

function returnsAnAnonymousFunction()
{
    return function(){}
}