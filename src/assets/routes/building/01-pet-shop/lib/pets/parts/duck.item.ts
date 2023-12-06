import duck_item_bin from './duck.item.bin?url';
import duck_png from './duck.png?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_specular",
		"KHR_materials_ior"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "duck.item",
			"translation": [
				4,
				1,
				0
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0,
						0,
						0
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Duck",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 0
				},
				"roughnessFactor": 0.858578622341156
			}
		}
	],
	"meshes": [
		{
			"name": "Mesh",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		}
	],
	"images": [
		{
			"mimeType": "image/png",
			"name": "duck",
			"uri": duck_png
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 6952,
			"max": [
				0.4766086935997009,
				0.5164394378662109,
				0.44884777069091797
			],
			"min": [
				-0.47660186886787415,
				-0.523955762386322,
				-0.791047215461731
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 6952,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 6952,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 10602,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 57291,
			"byteOffset": 0
		}
	],
	"samplers": [
		{
			"magFilter": 9729,
			"minFilter": 9987
		}
	],
	"buffers": [
		{
			"byteLength": 57292,
			"uri": duck_item_bin
		}
	]
}