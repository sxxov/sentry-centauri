import windmill_x1_bin from './windmill-x1.bin?url';
import walls_color_jpg from './walls_color.jpg?url';
import roof_color_jpg from './roof_color.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_emissive_strength",
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
			"name": "Windmill.002",
			"rotation": [
				0.6440664529800415,
				0.2918534576892853,
				-0.29185348749160767,
				0.6440663933753967
			],
			"scale": [
				0.5894463062286377,
				0.5894463062286377,
				0.5894461274147034
			],
			"translation": [
				-20.659841537475586,
				11.907788276672363,
				-50.91567611694336
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"emissiveFactor": [
				1,
				1,
				1
			],
			"emissiveTexture": {
				"index": 0
			},
			"extensions": {
				"KHR_materials_emissive_strength": {
					"emissiveStrength": 4.299999713897705
				},
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.42037705477998155,
						0.42037705477998155,
						0.42037705477998155
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "walls_mat",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 1
				},
				"metallicFactor": 0,
				"roughnessFactor": 0.968181848526001
			}
		},
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.366482544268505,
						0.366482544268505,
						0.366482544268505
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Roof_mat",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 2
				},
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Cube.159",
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
				},
				{
					"attributes": {
						"POSITION": 4,
						"NORMAL": 5,
						"TEXCOORD_0": 6
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 1,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 7,
					"material": 1,
					"mode": 4
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		},
		{
			"sampler": 0,
			"source": 0
		},
		{
			"sampler": 0,
			"source": 1
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "walls_color",
			"uri": walls_color_jpg
		},
		{
			"mimeType": "image/jpeg",
			"name": "roof_color",
			"uri": roof_color_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 5060,
			"max": [
				5.793842315673828,
				3.6012282371520996,
				10.321292877197266
			],
			"min": [
				-4.886430263519287,
				-7.9872565269470215,
				-34.52265167236328
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 5060,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 5060,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 15897,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 1455,
			"max": [
				6.200468063354492,
				3.9584765434265137,
				-16.79119873046875
			],
			"min": [
				-5.374715328216553,
				-7.515862464904785,
				-34.96979522705078
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 1455,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 1455,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 6852,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 34451,
			"byteOffset": 0
		},
		{
			"buffer": 0,
			"byteLength": 10966,
			"byteOffset": 34452
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
			"byteLength": 45420,
			"uri": windmill_x1_bin
		}
	]
}