GLOBAL['#FairKey#']=(function(__initProps__){const __global__=this;return runCallback(function(__mod__){with(__mod__.imports){function _FairPageForFairNavigatorState(){const inner=_FairPageForFairNavigatorState.__inner__;if(this==__global__){return new _FairPageForFairNavigatorState({__args__:arguments});}else{const args=arguments.length>0?arguments[0].__args__||arguments:[];inner.apply(this,args);_FairPageForFairNavigatorState.prototype.ctor.apply(this,args);return this;}}_FairPageForFairNavigatorState.__inner__=function inner(){this.fairProps=__initProps__;this.pageName="";this.list=[];};_FairPageForFairNavigatorState.prototype={onLoad:function onLoad(){const __thiz__=this;with(__thiz__){if(fairProps&&fairProps.__op_idx__('page_name')){pageName=fairProps.__op_idx__('page_name');}if(fairProps&&fairProps.__op_idx__('button_list')){list=fairProps.__op_idx__('button_list');}}},back:function back(){const __thiz__=this;with(__thiz__){FairNavigator.pop();}},isPageNameNull:function isPageNameNull(){const __thiz__=this;with(__thiz__){return pageName.isEmpty;}},};_FairPageForFairNavigatorState.prototype.ctor=function(){};;return _FairPageForFairNavigatorState();}},[]);})(convertObjectLiteralToSetOrMap(JSON.parse('#FairProps#')));