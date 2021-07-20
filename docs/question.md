# 解决“升级代码时，需要对应修改用户自己版本的代码”的问题

现有的问题
用户修改了代码，混入了自己的逻辑



解决的思路
项目应该符合开闭原则：用户需要扩展时，不应该修改代码，而应该只在原来的代码基础上增加代码



一些具体的解决方案

- 提供扩展API，用户可通过这些API来加入自己的逻辑

比如Three.js的ShaderMaterial，用户可以加入自定义Shader的材质；
比如Unity的脚本组件，用户可在钩子函数中加入自己的逻辑；

- 解耦合，并且多用组合少用继承，从而用户可以通过组合的方式加入新的代码

比如用户需要在场景中增加一个包含自定义顶点数据的Geometry组件的GameObject


如果是没有解耦合的设计： Gameobject包含了所有组件的逻辑，导致用户需要创建一个GameObject，然后设置它的geometry属性来配置geometry相关的数据。

那么用户就需要去修改GameObject中关于Geometry逻辑的代码，增加“包含自定义顶点数据的Geometry”的逻辑！



如果是解耦合的设计：GameObject中没有任何组件的逻辑，且GameObject和组件是组合的关系

那么用户可以新增一个CustomGeometry组件，然后将该组件add到GameObject中即可，不需要修改代码

<!-- 
 GameObject -> Geometry

 CustomGeometry

 GameObject.add(CustomGeometry)

 pbrmaterial

 lightmaterial


 CustomGeometryGameObject GameObjet

 PBRMaterialGameObject


 PBRMaterialCUstomGameObject -->