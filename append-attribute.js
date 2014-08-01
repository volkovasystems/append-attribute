var appendAttribute = function appendAttribute( attribute, element ){
	/*:
		@meta-configuration:
			{
				"attribute:required": "Attr",
				"element:required": "Element|Node"
			}
		@end-meta-configuration
	*/

	element.setAttributeNode( attribute );
};